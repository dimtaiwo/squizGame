export default function Question(props) {
    return (
        <div className="Question">
            <h1 dangerouslySetInnerHTML={{ __html: props.question }}></h1>

            {props.answers.map((answer) => <button onClick={() => props.registerAnswer(answer)}>{answer}</button>)}
        </div>
    );
};
