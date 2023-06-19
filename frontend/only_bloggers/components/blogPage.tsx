import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import styles from '../styles/blogPage.module.css'
import { useSession } from 'next-auth/react';
import Alert from '@mui/material/Alert';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const BlogPage = (props: any) => {
    const { data: session } = useSession();

    const [saved, setSaved] = React.useState(false);
    const [liked, setLiked] = React.useState(false);
    const [error, setError] = React.useState(false);
  
    async function savedHandler() {
        
        const url = `http://localhost:8080/users/saveBlog?blogId=1&email=${session?.user?.email}`
        const requestOption = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
        
        }
        const response = await fetch(url, requestOption);
        if (!response.ok) {
            setError(true);
            setSaved(false);
            throw new Error("Something went wrong");
        }
        setError(false);
        setSaved(true);
        window.scroll(0,0);
    }
    async function likedHandler() {
        const url = `http://localhost:8080/users/likeBlog?blogId=1&email=${session?.user?.email}`
        const requestOption = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
        
        }
        const response = await fetch(url, requestOption);
        if (!response.ok) {
            setError(true);
            setLiked(false);
            throw new Error("Something went wrong");
        }
        setError(false);
        setLiked(true);
        window.scroll(0,0);
    }
   
  return (
   <Dialog
    open={props.open}
    TransitionComponent={Transition}
    keepMounted
    onClose={props.handleClose}
          aria-describedby="alert-dialog-slide-description"
          PaperProps={{
            sx: {
              width: "75%",
                  height: "75%"
            ,minWidth:500
              
            }
          }}
          
  >
    
    <div className={styles.main}>
              <div className={styles.inner}>
                  <img src="https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className={styles.img} />
                  <div className={styles.text}>
                      <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit..</h3>
                      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam earum harum nobis sapiente blanditiis, architecto repellat voluptatem quas iste. Error alias cum, optio facere ad recusandae eaque ducimus unde?</h5>
                  </div>
              </div>   
              <hr className={styles.horizontalLine} />
             
              <p className={styles.body}>
              A blog (a truncation of "weblog")[1] is an informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.

The emergence and growth of blogs in the late 1990s coincided with the advent of web publishing tools that facilitated the posting of content by non-technical users who did not have much experience with HTML or computer programming. Previously, knowledge of such technologies as HTML and File Transfer Protocol had been required to publish content on the Web, and early Web users therefore tended to be hackers and computer enthusiasts. In the 2010s, the majority are interactive Web 2.0 websites, allowing visitors to leave online comments, and it is this interactivity that distinguishes them from other static websites.[2] In that sense, blogging can be seen as a form of social networking service. Indeed, bloggers not only produce content to post on their blogs but also often build social relations with their readers and other bloggers.[3] Blog owners or authors often moderate and filter online comments to remove hate speech or other offensive content.
              </p>
              
          </div>
          <hr className={styles.horizontalLine} />
          {liked && !error && saved && <Alert severity="success">Post Succesfully Liked and saved!</Alert>}
              {liked && !error && !saved && <Alert severity="success">Post Succesfully Liked!</Alert>}
              {saved && !error && !liked  && <Alert severity="success">Post Succesfully saved!</Alert>}
              {error && <Alert severity="error">Something went wrong</Alert>}
    <DialogActions>
      <Button onClick={savedHandler}>Save Blog</Button>
      <Button onClick={likedHandler}>Like Post</Button>
    </DialogActions>
  </Dialog>
  )
}

export default BlogPage