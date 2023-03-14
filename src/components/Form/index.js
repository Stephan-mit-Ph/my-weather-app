import "./Form.css";

export default function Form({onAddActivity}) {
    function handleSubmit(event){
        event.preventDefault();
        const formData =new FormData(event.target);
        const data= Object.fromEntries(formData);
        console.log(data)
        onAddActivity(data)
        event.target.reset();
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <h2>Add new Activity:</h2>

            <div className="form__input">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"/>
            </div>
            <div className="form__input">
            <label htmlFor="checkbox">Good Weather Activity:</label>
            <input type="checkbox" id="checkbox" name="isForGoodWeather"/>
            </div>
            <button type="submit">Submit</button>
        </form>

    );
}