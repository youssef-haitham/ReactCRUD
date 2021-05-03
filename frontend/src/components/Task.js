import React, { Component } from 'react'

export class Task extends Component {

    constructor() {
        super()
        this.state = 
            {
                name: 'Chris',
                twitter: 'chrisoncode',
                bio: 'The dude at scotch.io'
            }
        
    }

    changeState(){
        this.setState(
            {
                name:"youssef",
                twitter: "hi"
            }
        )
    }

    render() {
        return (
            <div>
                <button type="button" onClick={() => this.changeState()}>Change state</button>
              
                    <table>
                        <tr>
                        <tc>{this.state.name}</tc>
                        <tc>{this.state.twitter}</tc>
                        </tr>
                    </table>

            </div>
        )
    }
}

export default Task
