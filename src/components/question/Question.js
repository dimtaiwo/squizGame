import './Question.css'

export default function Question(props) {

    function shuffle(array) {
        /**
         * FROM STACK OVERFLOW
         */

        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const shuffledQuestions = shuffle(props.answers);

    return (
        <div className="Question">
            <h1 dangerouslySetInnerHTML={{ __html: props.question }}></h1>

            {shuffledQuestions.map((answer) => <button onClick={() => props.registerAnswer(answer)}>{answer}</button>)}
        </div>
    );
};