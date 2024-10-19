from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import boto3

app = FastAPI()

# Allow CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# AWS credentials from environment variables
import os

AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
AWS_REGION = os.getenv("AWS_REGION", "us-west-2")
AWS_S3_BUCKET_NAME = os.getenv("AWS_S3_BUCKET_NAME", "biosimilar-documents")

s3_client = boto3.client(
    's3',
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=AWS_REGION
)

@app.get("/")
def read_root():
    return {"Hello": "World Apoorv hey there?"}

@app.post("/file-upload/")
async def file_upload(file: UploadFile = File(...)):
    
    # if file.content_type != 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    #     return {"error": "File type not supported. Please upload a .docx file."}
    try:
        # Read the file content
        
        file_content = await file.read()

        # print("file content", file_content)

        # Upload the file to S3
        s3_client.put_object(
            Bucket=AWS_S3_BUCKET_NAME,
            Key=f"contact/{file.filename}",
            Body=file_content
        )

        return {"message": "Contact file uploaded successfully", "filename": file.filename}
    except Exception as e:
        return {"error": str(e)}