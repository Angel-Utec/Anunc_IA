from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from common.database.database import get_db
from .models import Usuario
from .security import verify_password, get_password_hash, create_access_token
from datetime import timedelta

router = APIRouter()

# Modelos para la solicitud de registro y login
class RegisterRequest(BaseModel):
    nombre: str
    email: str
    password: str

class LoginRequest(BaseModel):
    email: str
    password: str

# Registro de un nuevo usuario
@router.post("/register")
async def register_user(request: RegisterRequest, db: Session = Depends(get_db)):
    hashed_password = get_password_hash(request.password)
    usuario = Usuario(nombre=request.nombre, email=request.email, contraseña=hashed_password)
    db.add(usuario)
    db.commit()
    db.refresh(usuario)
    return {"msg": "Usuario registrado con éxito"}

# Inicio de sesión (Login)
@router.post("/login")
async def login_user(request: LoginRequest, db: Session = Depends(get_db)):
    usuario = db.query(Usuario).filter(Usuario.email == request.email).first()
    if not usuario or not verify_password(request.password, usuario.contraseña):
        raise HTTPException(status_code=400, detail="Email o contraseña incorrectos")

    access_token_expires = timedelta(minutes=30)
    access_token = create_access_token(data={"sub": usuario.email}, expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}
