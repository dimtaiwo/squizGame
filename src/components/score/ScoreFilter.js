import "./ScoreFilter.css";

export default function ScoreFilter(props) {

    const filteredTopics = [];

    props.data.map(score => {
        if (!filteredTopics.includes(score.topic))
            filteredTopics.push(score.topic);

        return 0;
    });

    const filterChangeHandler = (e) => {
        props.filterData(e.target.value);
    };

    return (
        <div className="Score-filter">
            <select onChange={filterChangeHandler}>
                <option value="all">All</option>
                {filteredTopics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
            </select>
        </div>
    );
};
