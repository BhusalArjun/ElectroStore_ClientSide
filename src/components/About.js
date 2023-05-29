function About({title,phone,myFun}){
    return <div>
        <h1>This is About Component</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Architecto dolorem molestiae quis modi impedit ex consequatur officiis consequuntur, culpa libero.</p>
         {/* { JSON.stringify(title,phone,myFun) } */}
         <br/>
         <button onClick={myFun}>Click to see props</button>
         {title},{phone}
    </div>

}
export default About;