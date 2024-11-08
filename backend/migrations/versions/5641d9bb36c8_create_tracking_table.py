"""create tracking table

Revision ID: 5641d9bb36c8
Revises: 63571eb85a86
Create Date: 2024-11-06 00:07:00.584334

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '5641d9bb36c8'
down_revision: Union[str, None] = '63571eb85a86'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tracking',
    sa.Column('TraceId', sa.Integer(), nullable=False),
    sa.Column('UserId', sa.Integer(), nullable=False),
    sa.Column('Route', sa.String(), nullable=False),
    sa.Column('HttpStatusCode', sa.Integer(), nullable=False),
    sa.Column('StartDate', sa.DateTime(), nullable=False),
    sa.Column('EndDate', sa.DateTime(), nullable=False),
    sa.Column('Latency', sa.Float(), nullable=False),
    sa.PrimaryKeyConstraint('TraceId')
    )
    op.create_index(op.f('ix_tracking_TraceId'), 'tracking', ['TraceId'], unique=False)
    op.drop_index('idx_usuarios_email', table_name='usuarios')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_index('idx_usuarios_email', 'usuarios', ['email'], unique=True)
    op.drop_index(op.f('ix_tracking_TraceId'), table_name='tracking')
    op.drop_table('tracking')
    # ### end Alembic commands ###
