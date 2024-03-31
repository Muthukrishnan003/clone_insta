import style from "./Style.module.css"
import facebook from "./facebook-logo-png-38362.jpg"
import img1 from "../Images/screenshot1-2x.png"
import { useState } from "react"
const Signup=()=>{

    let [email,setEmail]=useState('')
    let [fname,setFname]=useState('')
    let [user,setUser]=useState('')
    let [pwd,setPwd]=useState('')

    let getEmail =(e)=>{
        setEmail(e.target.value)
    }
    let getFname =(e)=>{
        setFname(e.target.value)
    }
    let getUser =(e)=>{
        setUser(e.target.value)
    }
    let getPwd =(e)=>{
        setPwd(e.target.value)
    }

    let formhandle=(e)=>{
        e.preventDefault()
        console.log(email,fname,user,pwd)
    }
    let check = ()=>{
        if(email.length<10){
            alert("Mobile no should be minimum 10")
        }
        else if(fname.length<5){
            alert("Fname should be more than 5")
        }
        else if(user.length<5){
            alert("User should be more than 5")
        }
    }

    const st={
        backgroundImage:"url(https://static.cdninstagram.com/rsrc.php/v3/ys/r/WBLlWbPOKZ9.png)", backgroundPosition: "0px 0px", backgroundSize:" 176px 264px", width: "174px", height: "50px", backgroundRepeat: "no-repeat", display: "inline-block", margin: "30px 10px 0px 10px"
    }
                       
    return(
        <div id={style.Signup}>
            <div id={style.left}>
                <img id={style.img1} src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk" alt="" />   
                <img id={style.img2} src={img1} alt="" />                          
            </div>
            <div id={style.right}>
                <div id={style.form}>
                    <i data-visualcompletion="css-img" aria-label="Instagram"  role="img" style={st}></i>
                    <form action="" onSubmit={formhandle} id={style.form1}>
                        <span>Sign up to see photos and videos from your friends.</span>
                        <button><img src={facebook} width="14px" alt="" />Log in with Facebook</button>
                        <div id={style.or}>
                        <div id={style.line}></div>
                        <span>OR</span>
                        <div id={style.line}></div>
                        </div>

                        <div className={style.focus}>
                            <input type="text" className={style.input} />
                            <label className={style.label}>Mobile number or email address</label>
                        </div>

                        <input type="text" value={email} onChange={getEmail} placeholder="Mobile number or email address" />
                        <input type="text" value={fname} onChange={getFname} placeholder="Full Name" />
                        <input type="text" value={user} onChange={getUser} placeholder="Username" />
                        <input type="password" value={pwd} onChange={getPwd} placeholder="Password" />
                        <p>                     
                                People who use our service may have uploaded your contact information to Instagram. <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&amp;e=AT0jU765dq4hlgBTgSzjamaumkQMdeQXgdVwERuqCGpjZxHbY6314fUAMsl1Owg2amPzXGGj35OBUthI0vXjvX9p-59szZzix1JJafDmNpqISsxq1x9e6IBtC1QTynu-bgk__-xrgldDAPu1L8XEHA" rel="nofollow noreferrer" role="link" tabindex="0" target="_blank">Learn more</a><br /><br />By signing up, you agree to our <a href="https://help.instagram.com/581066165581870/?locale=en_GB" role="link" tabindex="0" target="_blank">Terms</a>, <a  href="https://www.facebook.com/privacy/policy" rel="nofollow noreferrer" role="link" tabindex="0" target="_blank">Privacy Policy</a> and <a  href="https://privacycenter.instagram.com/policies/cookies/" role="link" tabindex="0" target="_blank">Cookies Policy</a>. 
                        </p>
                        <button onClick={check}>SignUp</button>
                    </form>
                </div>
                <div id={style.login}>
                    <p>Have an account?<a href="">Log in</a></p>
                </div>
                <div id={style.app}>
                    <p>Get the app.</p>
                    <div id={style.img}>
                        <a id={style.google} href="https://play.google.com/store/apps/details?id=com.instagram.android&pli=1" target="_blank" ><img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" /></a>
                        <a id={style.microsoft} href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C2580%2C1800" target="_blank" ><img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" /></a>
                    </div>

                </div>
               
            </div>
        </div>
    )
}
export default Signup