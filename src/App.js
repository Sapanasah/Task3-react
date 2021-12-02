import React from 'react';

function Product (prop) {

    function toString(prop){
        return "[" + "id = " +prop.id + " , courseId = "+prop.CourseId+ " , type = " + prop.type+" , category = " +prop.category + " , name = " + prop.name + " , startDate = " +prop.startDate +"]";
    }

    return (
        <div>
            {toString(prop)};  
        </div>
    );
}

export default Product;