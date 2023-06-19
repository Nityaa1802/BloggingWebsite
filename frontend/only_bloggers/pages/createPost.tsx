
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Divider from '@mui/material/Divider';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/router';
import styles from '../styles/createPost.module.css'
import Blog from '@/model/Blog';
import Alert from '@mui/material/Alert';



const CreatePost = () => {
  const router = useRouter();
  const [blog, setBlog] = React.useState<Blog>(new Blog("", "", "", ""));
  const [displayWarning, setDisplayWarning] = React.useState({flag:false,message:""});
  const [displaySuccess, setDisplaySuccess] = React.useState(false);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  }
  React.useEffect(() => {
    console.log(blog)
  }, [blog])
  


  async function submitHandler() {
    if (blog.title !== "" && blog.description !== "" && blog.body !== "" && blog.img !== "") {
      const url = "http://localhost:8080/blogs/createBlog";
      const requestOption = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog),
      }
      const submitResponse = await fetch(url, requestOption);
      if (!submitResponse.ok) {
        setDisplaySuccess(false);
        setDisplayWarning({flag:true,message:"Something Went Wrong!Please try Again"});
        throw new Error("Something Went Wrong");

      }
      setBlog(new Blog("", "", "", ""));
     setDisplaySuccess(true);
        setDisplayWarning({flag:false,message:""});
    } else {
      setDisplaySuccess(false);
        setDisplayWarning({flag:true,message:"Fill All the Details Correctly"});
    }
  }

  return (
    <div  ><Dialog open={true} onClose={()=>{router.replace('/')}} className={styles.main}  >
      <DialogTitle className={styles.heading} variant='h4' >Upload New Blog</DialogTitle>
      <DialogContent>
      <Divider/>
      <DialogContentText className={styles.text}>
        To upload a new blog please input every detail.
        </DialogContentText>
        {displayWarning.flag && <Alert severity="error">{displayWarning.message}</Alert>}
        {displaySuccess&&  <Alert severity="success">This is a success alert — check it out!</Alert>}
      <TextField
        autoFocus
        margin="dense"
        id="title"
        label="Blog Title"
        type="text"
        fullWidth
          variant="standard"
          name='title'
          multiline
          required
          value={blog.title}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(e)}
        />
        <TextField
        autoFocus
        margin="dense"
        id="description"
        label="Blog Description"
        type="text"
        fullWidth
          variant="standard"
          name='description'
          multiline
          required
          value={blog.description}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(e)}
        />
        <TextField
        autoFocus
        margin="dense"
        id="body"
        label="Blog Content"
        type="text"
        fullWidth
          variant="standard"
          name='body'
          multiline
          required
          value={blog.body}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(e)}
        />
        <TextField
        autoFocus
        margin="dense"
        id="img"
        label="Image Link"
        type="text"
        fullWidth
          variant="standard"
          name='img'
          multiline
          required
          value={blog.img}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(e)}
        />
        {/* <input type='upload'>  </input> */}
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>{router.replace('/')}}>Cancel</Button>
      <Button onClick={submitHandler}>Submit</Button>
      </DialogActions>
     
     

  </Dialog></div>
  )
}

export default CreatePost