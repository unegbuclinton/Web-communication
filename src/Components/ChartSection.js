import React from 'react'
import styled from 'styled-components'
import { innerLayout } from '../Styles/Layout'
import Stats from './Stats'
import chart from '../img/chart.svg'
import AnimatedButton from './AnimatedButton'


function ChartSection() {
    return (
        <ChartSectionStyled>
            <innerLayout>
                <div className="chart-container">
                    <div className="chart-left">
                        <div className="stats">
                           <div className="stats-cards">
                                <Stats name={'Balance'} amount={'$250'} />
                                <Stats name={'Last Transaction'} amount={'$1,000'} />
                           </div>
                           <img src={chart} alt="" />
                        </div>
                    </div>
                    <div className="chart-right">
                        <h2 className="secondary-heading">
                            Manage your finance like a pro in no time
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum nisi eius ratione beatae, temporibus fuga corporis blanditiis voluptate obcaecati eum in iure voluptatibus laudantium!z
                        </p>
                        <AnimatedButton name={'Learn More'} />
                    </div>
                </div>
            </innerLayout>
        </ChartSectionStyled>
    )
}

 const ChartSectionStyled = styled.section`
 
    .chart-container{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        margin-bottom: 12rem;

    }

    .stats-cards{
        display:flex; 
        padding-bottom:1.3rem;
    }
    .chart-left{
        img{
            box-shadow: 0px 25px 50px rbga(22,25,79,0.05);
            border-radius: 60px;
            width: 90%;
        }
    }

    .chart-right{
        padding-left: 4rem;
    }
    .chart-right {
        p{
            padding:1.3rem 0;
        }
      
    }


    @media screen and (max-width:960px){
        .chart-container{
            grid-template-columns: repeat(1, 1fr);
        }
          .chart-right{

            text-align: center;
          }
          .chart-left{
              margin-bottom: 3rem;
              margin-left:5rem;
              img{
                  width: 80%;
                  margin-left: 2rem;
              }
          }
    }

    @media screen and (max-width:768px){
        
        .chart-left{
            margin-bottom: 3rem;
            margin-left:3rem;
            img{
                width: 80%;
                margin-left: 2rem;
            }
        }
        .chart-right{
            padding-left:0 ; 
        }
       
    }

    @media screen and (max-width:500px){
        
        .chart-left{
            margin-bottom: 3rem;
            margin-left:3rem;
            img{
                width: 80%;
                margin-left: 1rem;
            }
        }
        .chart-right{
            padding-left:0 ; 
        }
       
    }
 `;
export default ChartSection
