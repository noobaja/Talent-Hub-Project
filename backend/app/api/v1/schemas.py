from pydantic import BaseModel
from typing import List

class Project(BaseModel):
    id: int
    title: str
    description: str
    technologies: List[str]