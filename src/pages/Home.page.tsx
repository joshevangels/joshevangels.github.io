import * as React from "react";

export const HomePage: React.FunctionComponent = () => {
    return (
        <div className="homepage">
            <header>
                <h1>
                    Joshua Evangelista's GitHub User Page
                </h1>
            </header>
            <main>
                <p>
                    My ongoing home page on the internet for now.
                </p>
                <p>
                    If I am good about it, this should be updated fairly often.
                </p>
                <p>
                    I am starting by building this in TypeScript and React for now
                    but I want to see if I can do other cool stuff with different
                    technologies so as time goes on this might be replaced by
                    completely different technologies.
                </p>
            </main>
        </div>
    );
}