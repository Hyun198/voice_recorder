import React, { useState } from 'react'


function Calc() {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('income');
    const [transaction, setTransaction] = useState('transaction');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || !description) return;
        const newTransaction = {
            id: Date.now(),
            amount: parseFloat(amount),
            description,
            type
        };
        setTransaction([...transaction, newTransaction]);
        setAmount('');
        setDescription('');
    }

    return (
        <>
            <div className="calc-container">
                <h1>가계부</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>금액:</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                    </div>
                </form>
            </div>
            <div>
                <label>설명:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>

            <div>
                <label>유형:</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="income">수입</option>
                    <option value="expense">지출</option>
                </select>
            </div>


        </>

    )
}

export default Calc