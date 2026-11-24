var text = [`
        <div class="wowie">
    
            <div style="display: flex;  flex-wrap: wrap;  gap: 1%">
                <div style="flex: 1;">
                    
                    <div style="margin-top:7em; margin-left: 0vw; background-color: rgba(232, 9, 9, 0.2); width: 50px; height: 50px;  padding: 0 0 0 0; border-radius:50%; border: 1px solid rgba(0, 0, 0, 1)">
                        <p style="display: grid; text-align: center;">1</p>
                    </div>
                </div>
                <div style="flex: 4; cursor: pointer; border: 1px solid rgba(0,0,0,0.5); background-color: rgba(232, 9, 9, 0.2); border-radius: 10px; padding: 3% 3% 6% 3%">
                    <div>
                        <div style="display: grid; text-align: end;">
                            <p>3/9/2026</p> 
                            
                        </div>
                    </div>
                    <div>
                        <hr>         
                        <h1>Development: </h1>
                        <h5>I Am Affirmations is currently in development.</h5>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `];

class Mynews extends HTMLElement{
    connectedCallback(){

        this.addText();
        this.render();


    }


    render()
        {
            this.innerHTML = `

        <div class="news">
            ${text.toReversed(text.map(item=>`${item}`))}            
        `;
    }

    addText()
    {
        text.push(
            `
        <div class="wowie">
    
            <div style="display: flex;  flex-wrap: wrap;  gap: 1%">
                <div style="flex: 1;">
                    
                    <div style="margin-top:7em; margin-left: 0vw; background-color: rgba(232, 9, 9, 0.2); width: 50px; height: 50px;  padding: 0 0 0 0; border-radius:50%; border: 1px solid rgba(0, 0, 0, 1)">
                        <p style="display: grid; text-align: center;">2</p>
                    </div>
                </div>
                <div style="flex: 4; cursor: pointer; border: 1px solid rgba(0,0,0,0.5); background-color: rgba(232, 9, 9, 0.2); border-radius: 10px; padding: 3% 3% 6% 3%">
                    <div>
                        <div style="display: grid; text-align: end;">
                            <p>8/9/2026</p> 
                            
                        </div>
                    </div>
                    <div>
                        <hr>         
                        <h1>Release:</h1>
                        <h5>We are happy to announce that this site "I Am Affirmations" is getting indexed! :)</h5>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
        );

    }

}

customElements.define('my-news-footer',Mynews);