import "./post.css"

const Post = () => {
  return (
    <div className="post">
        <img className="postImg"
            src="https://images.pexels.com/photos/2776479/pexels-photo-2776479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">SONNETS</span>
                <span className="postCat">SOCIETY</span>
            </div>
            <span className="postTitle">
                These are my sonnets
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Hello hello hello hello hello hello hello gekvn wsnkak v k kas kc as k v   sz  ksvlsnvs  sadvnsadknvcja avdka sdfnam dvmas ndfvna sfdcf wevdc avwcfrfvyera ah qthvaegr 
            Hello hello hello hello hello hello hello gekvn wsnkak v k kas kc as k v   sz  ksvlsnvs  sadvnsadknvcja avdka sdfnam dvmas ndfvna sfdcf wevdc avwcfrfvyera ah qthvaegr 
            Hello hello hello hello hello hello hello gekvn wsnkak v k kas kc as k v   sz  ksvlsnvs  sadvnsadknvcja avdka sdfnam dvmas ndfvna sfdcf wevdc avwcfrfvyera ah qthvaegr 
        </p>
    </div>
  )
}

export default Post