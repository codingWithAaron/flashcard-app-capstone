import React from "react";
import {Link} from "react-router-dom"

function Form(){
    return(
        <>
            <div className="container">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            {" "}
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">Create Deck</li>
                    </ol>
                </nav>
                <div>
                    <h2>Create Deck</h2>
                </div>
                <div className="d-flex flex-column">
                    <form>
                        <div>
                            <label>Name</label>
                        </div>
                        <div>
                            <input className="w-100" id="name" type="text" name="name" placeholder="Deck Name"></input>
                        </div>
                        <div className="mt-2">
                            <label>Description</label>
                        </div>
                        <div>
                            <textarea className="w-100" id="name" type="text" name="name" placeholder="Brief description of the deck"></textarea>
                        </div>
                        <div className=" d-flex flex-row mt-2">
                            <div className="mr-2">
                                <button className="btn btn-secondary">Cancel</button>
                            </div>
                            <div>
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>          
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form