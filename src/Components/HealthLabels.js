import React from 'react'

const HealthLabels = ({recipes}) => {
    console.log(recipes[0].recipe.healthLabels[0]);
    return (
            <ul>
            {recipes[0].recipe.healthLabels.map((label) => {
                   return <li> {label} </li>  })
                   }
            </ul>          
    )
}

export default HealthLabels;