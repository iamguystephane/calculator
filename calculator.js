let input_field = document.getElementById('display')
function addToDisplay(value)
{
   input_field.value += value;
}

function reset()
{
   input_field.value = "";
}

function delSingleValue()
{
   let currentValue = input_field.value;
   input_field.value = currentValue.slice(0, -1);
}

function calculation()
{
   let expression = input_field.value;
   try
   {
      let result = eval(expression);
      input_field.value = result;
   }
   catch(error)
   {
      input_field.value = "Error, cannot compute this"
   }
}

let container = document.getElementById('container');
function toggle()
{
   if(container.style.background == 'darkblue')
   {
      container.style.background = 'black';
   }
   else
   {
      container.style.background = 'darkblue';
   }
}