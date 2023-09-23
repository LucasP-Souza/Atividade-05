import PromptSync from "prompt-sync";
const prompt = PromptSync()

const arrayPrint = [5,10,12,2,9,11,15,8,6]

arrayPrint.forEach(function(element) {
  element > 10 ? console.log(element) : null
})
