import React from 'react';
import {Button} from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function AddPayment() {
    return (
        <div>
            <div>
                <p> Life insurance &gt; Insurance Details </p>
                <Button>+ Add payment</Button>
            </div>


            <div>

                <div>
                    <p>Policy plan</p>
                    <div>
                        <p>Life Insurance</p>
                        <p>1,000, 000</p>
                        <p>Policy number: 123456789</p>
                    </div>
                </div>

                <div>
                    <p>Beneficiaries</p>
                    <div><h6>J</h6> <span>Joy Martins</span> </div>
                    <div><h6>R</h6> <span>Ruth Martins</span></div>
                    <div><h6>C</h6> <span>Collins Martins</span></div>
                    <div> <BsThreeDotsVertical/></div>

                </div>
            </div>

            <div>
            <div><p>Total amount paid</p></div>
            <div>
                <p>Life Insurance</p>
                <p><span> ₦</span> 20,000</p>
                <p>Date paid: 25/05/2020</p>
             </div>
            </div>


        </div>
    )
}
