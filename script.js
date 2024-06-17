const biaotis=document.querySelectorAll('.biaoti')
const peizhiqiRightNeirongS = document.querySelectorAll('.peizhiqi-right-neirong1')
const BtnPre=document.querySelector('.btnPre')
const BtnNext=document.querySelector('.btnNext')
const CarModels=document.querySelectorAll('.carmodel')
const ColorBoxes=document.querySelectorAll('.color-box')
const SeatColorBoxes=document.querySelectorAll('.seat-color-box')
const FlipRearSeat=document.querySelector('.flip-rear-seat')
const MetalBumper=document.querySelector('.metal-bumper')
const CarpaitColorOverview=document.querySelector('.carpaint-box')
const carpaintText=document.querySelector('.peizhiqi-right-neirong4 .carpaint-container span')
const seatcolorOverview=document.querySelector('.seat-color-box-overview')
const seatcolorText=document.querySelector('.peizhiqi-right-neirong4 .seat-color-container span')
const choiseModel=document.querySelector('.peizhiqi-right-neirong4 .model')
const RFSchoise=document.querySelector('.peizhiqi-right-neirong4 .RFS span')
const Bumperchoise=document.querySelector('.peizhiqi-right-neirong4 .metal-bumper span')
const pricechoise=document.querySelector('.peizhiqi-right-dibu h1')
const contactInfo=document.querySelector('.contact-information')
const contacInfoClose=document.querySelector('.fa-times-circle-o')
const producIframe=document.querySelector('.Product-iframe')




console.log(producIframe);

let i = 0 //切换显示 标题/内容 的变量
let j = 2 //车漆颜色记录变量
let k = 0 //座椅颜色记录变量
let l =0 //车型记录变量
let m = false //是否选择后座椅 变量
let n = false //是否选择金属保险杆 变量
let contactI = 0  //是否显示联系信息 变量

let PriceArray=[25000,26000,27000,28000]

let S_model = 'E2'
let S_paint = 'Red_carpaint'
let S_seat = 'Yellow_seat'
let S_C = 'Normal'

// let S_model = 'E2'
// let S_paint = 'Black_carpaint'
// let S_seat = 'Black_seat'
// let S_C = 'Matal bumper'


// console.log(${S_model}-${S_paint};
console.log('./Product html/' + S_model + '-' + S_paint + '-' + S_seat + '-' + S_C +'.html');
console.log('./Product-img/'+ S_model + '/' + S_paint + '/' + S_seat + '/' + S_C +'/'+'index.html')


// producIframe.src='./Product-img/E2/Black_carpaint/Black_seat/Metal bumper/index.html'
// producIframe.src='./Product-img/'+ S_model + '/' + S_paint + '/' + S_seat + '/' + S_C +'/'+'test.html'


//rem大小随屏幕大小变化，从而改变字体
resetrem();
        //切换屏幕 （横屏竖屏）
        window.addEventListener("orientationchange", resetrem);
        //resize：屏幕的大小发生改变就触发监听事件resetrem
        window.addEventListener("resize",resetrem);

        function resetrem(){
            var html = document.querySelector("html");//获取到html元素
            var width = html.getBoundingClientRect().width;//获取屏幕的宽度
            html.style.fontSize = width/120+"px";
        }



// 标题|内容 点击切换
biaotis.forEach((biaoti,idx)=>{
    biaoti.addEventListener('click',()=>{
        RemoveBiaotiActive()
        biaoti.classList.add('active')
        RemoveNeirongActive()
        peizhiqiRightNeirongS[idx].classList.add('active')
        i=idx
        btnshow()
    })
})

// 按钮点击切换标题|内容
BtnNext.addEventListener('click',()=>{
    if(i<3){
        i++
        RemoveBiaotiActive()
        RemoveNeirongActive()
        biaotis[i].classList.add('active')
        peizhiqiRightNeirongS[i].classList.add('active')
        btnshow()
        
    }else{
        contactInfo.style.display=`flex`
    }
})
BtnPre.addEventListener('click',()=>{
    if(i>0){
        i--
        RemoveBiaotiActive()
        RemoveNeirongActive()
        biaotis[i].classList.add('active')
        peizhiqiRightNeirongS[i].classList.add('active')
        btnshow()
       
    }
})

//车型点击切换
CarModels.forEach((carmodel,idx)=>{
    carmodel.addEventListener('click',()=>{
    CarmodelRemoveActive()
    carmodel.classList.add('active')
    l=idx
    modelChange()
    pricecal()
    changeIframe()
    })
   
})

//车漆点击切换
ColorBoxes.forEach((colorbox,idx)=>{
    colorbox.addEventListener('click',()=>{
    CarpaintBoxRemoveActive()
    colorbox.classList.add('active')
    j=idx
    carpaintColorChange()
    changeIframe()
    })
})

//座椅颜色点击切换
SeatColorBoxes.forEach((seatcolorbox,idx)=>{
    seatcolorbox.addEventListener('click',()=>{
        SeatColorRemoveActive()
        seatcolorbox.classList.add('active')
        k=idx
        seatcolorChange()
        changeIframe()
    })
})

//RFS点击切换
FlipRearSeat.addEventListener('click',()=>{
    FlipRearSeat.classList.toggle('active')
    m=!m
    RFSchange()
    pricecal()
    changeIframe()
})
//保险杆点击切换
MetalBumper.addEventListener('click',()=>{
    MetalBumper.classList.toggle('active')
    n=!n
    Bumperchange()
    pricecal()
    changeIframe()
})

//关闭联系信息显示
contacInfoClose.addEventListener('click',()=>{
    contactInfo.style.display=`none`
})

// 标题去除active function
function RemoveBiaotiActive(){
 biaotis.forEach((biaoti)=>{
    biaoti.classList.remove('active')
 })
}
// 内容去除Active function
function RemoveNeirongActive(){
    peizhiqiRightNeirongS.forEach((peizhiqiRightNeirong)=>{
        peizhiqiRightNeirong.classList.remove('active')
    })
}

//车型去除active function
function CarmodelRemoveActive(){
    CarModels.forEach((carmodel)=>{
        carmodel.classList.remove('active')
    })
}

//车漆去除active function
function CarpaintBoxRemoveActive(){
    ColorBoxes.forEach((colorbox)=>{
    colorbox.classList.remove('active')
    })
}

//座椅颜色去除active function
function SeatColorRemoveActive(){
    SeatColorBoxes.forEach((seatcolorbox)=>{
        seatcolorbox.classList.remove('active')
    })
}

//改变overview 车漆部分选择
function carpaintColorChange(){
    if(j==0 ){ 
        CarpaitColorOverview.style.backgroundColor=`#0000ff`
        carpaintText.innerHTML=`Glossy blue`
        S_paint = 'Blue_carpaint'
     }
    if(j==1){
        CarpaitColorOverview.style.backgroundColor=`#B8B8B8`
        carpaintText.innerHTML=`Glossy grey`
        S_paint = 'Grey_carpaint'
    }
    if(j==2){ 
        CarpaitColorOverview.style.backgroundColor=`#ff0000`
        carpaintText.innerHTML=`Glossy red`
        S_paint = 'Red_carpaint'
    }
    if(j==3){ 
        CarpaitColorOverview.style.backgroundColor=`#000000`
        carpaintText.innerHTML=`Glossy black`
        S_paint = 'Black_carpaint'
    }
    if(j==4){ 
        CarpaitColorOverview.style.backgroundColor=`#A00101`
        carpaintText.innerHTML=`Matte red`
        S_paint = 'Matte_red_carpaint'
    }
}
//改变Overview 座椅颜色部分选择

function seatcolorChange(){
    if(k==0){
       seatcolorOverview.style.backgroundColor=`#000000`
       seatcolorText.innerHTML=`Black`
       S_seat = 'Black_seat'
    }
    if(k==1){
       seatcolorOverview.style.backgroundColor=`#F6DBBC`
       seatcolorText.innerHTML=`Yellow`
       S_seat = 'Yellow_seat'

    }
}
function modelChange(){
    if(l==0){
        choiseModel.innerHTML=`ENGAGE 2 seaters <br>$25000`
        S_model = 'E2'
       
    }
    if(l==1){
        choiseModel.innerHTML=`ENGAGE 2 seaters with 3' lifted kit<br>$26000`
        S_model = 'E2_3'
    }
    if(l==2){
        choiseModel.innerHTML=`ENGAGE 4 seaters <br>$27000`
        S_model = 'E4'
    }
    if(l==3){
        choiseModel.innerHTML=`ENGAGE 4 seaters with 6' lifted kit<br>$28000` 
        S_model = 'E4_6'      
    }
    
}

function RFSchange(){
    if(m==true){
     RFSchoise.innerHTML=`Flip Rear seat <br>$2000` 
     
    }
    if(m==false){
     RFSchoise.innerHTML=`NO RFS`   
    }
}
function Bumperchange(){
    if(n==true){
        Bumperchoise.innerHTML=`Metal Bumper <br>$800` 
        
       }
       if(n==false){
        Bumperchoise.innerHTML=`NO Metal Bumper`   
       }
}
function pricecal(){
      let aa=PriceArray[l]+m*2000+n*800
      pricechoise.innerHTML=`$ ${aa}`
}

function btnshow(){
    if(i==3){
        BtnNext.innerHTML=`Contact`
        BtnPre.style.opacity='0'
        BtnPre.disabled=true
        // contactI++
        // if(contactI==2){
        //     contactInfo.style.display=`none`
        //     alert('ni')
        // }
       
    }
    if(i<3){
        BtnNext.innerHTML=`Next`
    }
    if(i==0){
        BtnPre.style.opacity='0'
        BtnPre.disabled=true
    }
    if(i==1|| i==2){
        BtnPre.style.opacity='1'
        BtnPre.disabled=false
    }
}

function changeIframe(){
    if(m==true){
       if(n==true){
         S_C = 'Metal bumper_RFS'
       }
       else{
        S_C = 'RFS'
       }
        
       }
    if(m==false){
        if(n==true){
            S_C = 'Metal bumper'
          }
          else{
           S_C = 'Normal'
          }
       }

    //    producIframe.src='./Product html/' + S_model + '-' + S_paint + '-' + S_seat + '-' + S_C +'.html'
    producIframe.src='./'+ S_model + '/' + S_paint + '/' + S_seat + '/' + S_C +'/'+'index.html'
}