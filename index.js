//Child Component
function Header(){
    return (
        <header> 
                <nav>
                <img src="react-logo.png" className="small-image" alt="React Logo" />            
                </nav>
        </header>
    );
}

//Child Component
function MainContent(){
    return (
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>was first released in 2013</li>
                <li>was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
            </ul>
        </div>
    );
}

//Child Component
function Footer(){
    return(
        <footer>
                <small>©️ 2024 ganesh development. all rights reserved</small> 
        </footer>
    );
}

//Parent Componenet
function TemporaryPage () {
    return (
        <div>
            <Header /> 
            <MainContent />
            <Footer />
            
        </div>
    );

}

//ReactDOM.render(TemporaryPage() , document.getElementById("root"));
ReactDOM.render(<TemporaryPage /> , document.getElementById("root"));
