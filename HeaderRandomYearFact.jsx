import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HeaderRandomYearFacts.css"

const HeaderRandomYearFact = () => {
  const [UseLessFacts, SetUseLessFacts] = useState({});
  const [RandomYearFacts, SetRandomYearFacts] = useState();
  const [RandomJokes, SetRandomJokes] = useState({});
  const [RandomQuotesAndAuthor, SetRandomQuotesAndAuthor] = useState([{}])
  const [RandomQuotesAndAuthors, SetRandomQuotesAndAuthors] = useState("")
  const [advice, setAdvice] = useState();
  const [ChuckNoris, SetChuckNoris] = useState("")
  

useEffect(()=>{
    UseLessFactsHandle()
    RandomYearFactsFetch()
    RandomJokesHandle()
    randomQuoteFetch()
    OnClickRandomQuotesAndAuthors()
    FetchRandomAdvice()
    FetchChuckNoris()
    // console.log(UseLessFacts.id)
    // console.log(RandomYearFacts);
    //  console.log(RandomJokes)
    // console.log(RandomQuotesAndAuthor[1642])
    console.log(advice);
},[])

const RandomYearFactsFetch = (e) =>{
    axios.get('http://numbersapi.com/random/year').then(data=>{
        SetRandomYearFacts(data.data)
    })
}

const UseLessFactsHandle = (e) =>{
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
    .then(respon=>respon.json())
    .then(data=>{
        SetUseLessFacts(data)
    })
}

const RandomJokesHandle =(e)=>{
    axios.get('https://official-joke-api.appspot.com/jokes/random')
    .then((data)=>{
        SetRandomJokes(data.data)
    })
}

const randomQuoteFetch = async () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => SetRandomQuotesAndAuthor(data))
      .catch((error) => console.error(error));
  };

const OnClickRandomQuotesAndAuthors = () =>{
    var randomNumber = Math.floor(Math.random()*1642)
    SetRandomQuotesAndAuthors(RandomQuotesAndAuthor[randomNumber])
}

const FetchRandomAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  }

const FetchChuckNoris = () =>{
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data=> SetChuckNoris(data.value))
}

return(
    <div className="">
        <h1 className="fs-0 fw-bold text-center Headers">Get Quotes with Author, Year's Facts, Jokes, Advice and Many More..</h1>
        <div className="d-flex justify-content-between flex-wrap mt-5 m-5 text-center">
            <div>
                    <div className="cards bg-dark  text-danger m-4 ">
                        <h1>UseLess Facts</h1>
                        <div className=""><h5><span className="bi bi-quote"></span> {UseLessFacts.text} </h5></div>
                    </div>
                        <div className="padsButton"><button className="p-2 rounded-3 textColor" onClick={UseLessFactsHandle}>New One</button></div>
            </div>

            <div>
                <div className=" cards bg-dark  text-danger m-4">
                    <h1>Random Year Fact</h1>
                    <div><h5><span className="bi bi-check2-all"> {RandomYearFacts}</span></h5></div>
                </div>
                    <div className="padsButton"><button className="p-2 rounded-3 textColor" onClick={RandomYearFactsFetch}>New One</button></div>
            </div>

            <div>
                <div className="cards bg-dark  text-danger m-4">
                    <h1>Random Jokes</h1>
                    <div><h5><span className="bi bi-check2-all fit"> Question: {RandomJokes.setup}</span></h5></div>
                    <div><h5><span className="bi bi-caret-right-fill fit"> Punch Line: {RandomJokes.punchline}</span></h5></div>
                </div>
                <div className="padsButton"><button className="p-2 rounded-3 textColor" onClick={RandomJokesHandle}>New One</button></div>
            </div>

            <div>
                <div className="cards bg-dark  text-danger m-4">
                    <h1>Random Quote with Author</h1>
                    <div><h5><span className="bi bi-check2-all"> {RandomQuotesAndAuthors.text}</span></h5></div>
                    <div><h5><span className="bi bi-vector-pen"> {RandomQuotesAndAuthors.author}</span></h5></div>
                </div>
                <div className="padsButton"><button className="p-2 rounded-3 textColor" onClick={OnClickRandomQuotesAndAuthors}>New One</button></div>
            </div>

            <div>
                <div className="cards bg-dark  text-danger m-4">
                    <h1>Random Advicer</h1>
                    <div><h5><span className="bi bi-quote"> {advice}</span></h5></div>
                </div>
                <div className="padsButton"><button className="p-2 rounded-3 textColor" onClick={FetchRandomAdvice}>New One</button></div>
            </div>

            <div>
                <div className="cards bg-dark  text-danger m-4">
                    <h1>Random Chuck Noris Facts</h1>
                    <div><h5><span className="bi bi-check2-all"> {ChuckNoris}</span></h5></div>
                </div>
                <div className="padsButton"><button className="p-2 rounded-3 textColor" onClick={FetchChuckNoris}>New One</button></div>
            </div>
            
        </div>
    </div>
)

}


export default HeaderRandomYearFact