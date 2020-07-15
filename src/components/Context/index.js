import React, {Component} from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component{

    state = {
        players: [

        ]
    };

    handleAddPlayer = (name) => {
        this.setState( prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name
                    }
                ]
            };
        });
    }

    render(){
        return(
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                    addPlayer: this.handleAddPlayer
                },
            }}>
                {this.props.children}
            </ScoreboardContext.Provider>
        );
    }
}

export const Consumer = ScoreboardContext.Consumer;

