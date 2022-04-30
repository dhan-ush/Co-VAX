
// module.exports = ({ name, price1, price2, receiptId }) => {
   module.exports = ({ name, date_of_birth, gender, aadhar_number, dose1_vaccine_name, dose1_date, dose2_date }) => {
  const today = new Date();
  return `
  <!doctype html>
  <html>
     <head>
        <meta charset="utf-8">
        <title>PDF Result Template</title>
        <style>  
        *{
            font-family: 'Roboto',sans-serif;
            border: 0;
            padding: 0;
            margin: 0;
        }
        .img{
            width:29vw;
            height:auto;
        }
        .top{
            align-self: center;
            margin-top: 0.3em;
            margin-bottom: 0.2em;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .outer{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .title{
           margin:auto;
            align-self: center;
        }
        .heading{
           text-align:center;
            color: rgb(31,73,125);
            font-size: 1.4em;
            font-weight: bold;
            margin-bottom:50px;
        }
        .btitle{
            color: rgb(31,73,125);
            font-size: 1.2em;
            text-decoration: underline;
            font-weight: bold;
        }
        .footer{
           margin-top:200px;
            background-color: #e8ecef;
            display: flex;
            justify-content: space-between;
            margin-top: 0.2em;
            align-items: center;
        }
        .logo{
            color: rgb(31,73,125);
            font-size: 1.9em;
            font-weight: bolder;
        }
        .line{
            color: rgb(31,73,125);
            font-size: 1.1em;
            font-weight: 500;
        }
        .box{
           margin-bottom:50px;
            margin: auto;
            width: 80vw;
            display: flex;
            flex-direction: column;
            align-items: space-between;
        }
        .innerL{
            display: flex;
            flex-direction: column;
        }
        .row{
            display: flex;
            align-items: center;
        }
        .content1{
            text-transform: uppercase;
        }
        .btitle{
            margin-bottom: 0.5em;
        }
        .row{
            margin-bottom: 0.9em;
        }
        .label{
            font-size: 1.1em;
        }
        .content{
            font-weight: bold;
            font-size: 1.1em;
        }
        .row{
            display: flex;
            justify-content: space-between;
        }
        .box{
            margin-top: 0.5em;
        }
        .innerbox{
            display: flex;
        }
        .innerbox{
            display: flex;
            justify-content: space-between;
            /* width: 60vw; */
        }
        .innerL{
            width: 100vw;
        }
        .row{
            display: flex;
            align-items: center;
        }
        .img1{
            width: 40vw;
            height: auto;
        }
        .logodiv{
            margin-left:100vw;
        }
        .boxes{
            margin-bottom:100px;
        }
    </style>
     </head>
      <body>
        <div class="outer">
    
            <div class="top">
                
                <div class="title">
                    <div class="heading">Certificate for COVID-19 Vaccination</div>
                </div>
            </div>
    
            
            <div class="boxes">
            <div class="box">
                <div class="btitle">Beneficiary Details</div>
                <div class="innerbox">
                    <div class="innerL">
                        <div class="row">
                            <div class="label">Beneficiary Name: ${name}</div>
                        </div>
                        <div class="row">
                            <div class="label">Date of Birth: ${date_of_birth}</div>
                        </div>
                        <div class="row">
                            <div class="label">Gender: ${gender}</div>
                        </div>
                        <div class="row">
                            <div class="label">UID: ${aadhar_number}</div>
                        </div>
                        <div class="row">
                            <div class="label">Vaccination Status: Fully Vaccinated</div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="box">
                <div class="btitle">Vaccination Details</div>
                <div class="innerbox">
                    <div class="innerL">
                        <div class="row">
                            <div class="label">Vaccine Name: ${dose1_vaccine_name}</div>
                        </div>
                        <div class="row">
                            <div class="label">Dose 1 Date: ${dose1_date}</div>
                        </div>
                        <div class="row">
                            <div class="label">Dose 2 Date: ${dose2_date}</div>
                        </div>
                    </div>
            </div>
    </div>
            <div class="footer">
                    <div class="logodiv">
                        <div class="logo">Co-VAX</div>
                        <div class="line">Let's Fight COVID</div>
                    </div>
            </div>
    
        </div>
    
    </body>
  </html>
  `;
};
