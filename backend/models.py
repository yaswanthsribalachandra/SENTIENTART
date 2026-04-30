from beanie import Document
from pydantic import EmailStr
from typing import Optional
from datetime import datetime
from pydantic import BaseModel, Field, root_validator

class Admin(Document):
    first_name: str
    last_name: str
    profession: str
    email: EmailStr
    password: str

    otp: Optional[str] = None
    otp_expires: Optional[datetime] = None

    class Settings:
        name = "admin"   # collection name
        
        
class AdminLogin(BaseModel):
    email: EmailStr
    password: str


class ForgotPassword(BaseModel):
    email: EmailStr


class VerifyOTP(BaseModel):
    email: EmailStr
    otp: str = Field(min_length=6, max_length=6)


class ResetPassword(BaseModel):
    email: EmailStr
    new_password: str 
    
    