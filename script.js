const calculateele=document.querySelector(".calculate-form");
const result=document.querySelector(".result p");
const calculatemarks=(event)=>{
    const maxmark=400;
    event.preventDefault();

   const formData=new FormData(calculateele);
    const data={};
    formData.forEach((value,key)=>{
        data[key]= +value;
    });
   const totalmarks=data.math + data.english+ data.hindi + data.science;
   const percentage=(totalmarks/maxmark)*100;
   result.innerHTML=`Your percentage is :${percentage}%`
}