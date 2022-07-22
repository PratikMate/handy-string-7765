import React, { useState } from 'react'
import styled from 'styled-components'

const FeatureSubComponentStyling = styled.div`
.IndividualFeatures{
    width:fit-content;
    margin:auto;
}
.IndividualFeaturesSubTable{
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    width:1050px;
    gap:2%;
    margin:auto;
    padding:0px 0px 50px 0px;
    text-align:left;
}
.image2AdjustmentMainDiv{
    display:grid;
}
.image2Adjustment{
    position:absolute;
    margin:auto;
}
`

const FeatureSubComponent = (props) => {
    var style1
    var [isHiddden, setHidden] = useState(true)
    if (props._id % 2 !== 0) {
        style1={ background: '#f7fcff' };
    }
    else{
        style1 = {}
    }
    return (
        <FeatureSubComponentStyling style = {style1}>
            <div className='IndividualFeatures' onMouseLeave={()=>setHidden(true)} >
                <p style={{ color: '#3d4853', fontSize: '34px', marginBottom: '0px',marginTop:'50px' , fontWeight: '500' }}>{props.title}</p>
                <p style={{ color: '#5a6b7b', fontSize: '18px', marginBottom: '0px' }}>{props.subTitle}</p>
                <div className='image2AdjustmentMainDiv'>
                    <img src={props.img1} onMouseOver={()=>setHidden(false)}   style={{ margin: '0px' }} alt='img1' />
                    {isHiddden ? '' : <img className='image2Adjustment' src={props.img2} alt='img2' />}
                </div>
                <div className='IndividualFeaturesSubTable'>
                    {
                        props.table.map((e) => {
                            return <div key={e.id}>
                                <p style={{ color: '#3d4853', fontSize: '20px', margin: '0px' }}>{e.heading}</p>
                                <p style={{ color: '#5a6b7b', fontSize: '16px' }}>{e.subHeading}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </FeatureSubComponentStyling>
    )
}

export default FeatureSubComponent