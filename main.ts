import inquirer from 'inquirer';

const counter = (paragraph: string) =>  paragraph.replace(/\s/g,"").length;

async function startWordCount(counter:(text: string)=>number){
    do{
        let res = await inquirer.prompt({
            type:"input",
            name: "paragraph",
            message: "Write paragragh here..."
        })
        console.log(counter(res.paragraph)) 
    }
    while(true)
}

startWordCount(counter)