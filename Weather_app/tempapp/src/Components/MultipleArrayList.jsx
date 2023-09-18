import React, { Fragment } from 'react'

const MultipleArrayList = () => {
    const data = [
        {
            name: 'ram',
            address: [
                {
                    houseNo: 10,
                    location: "newyork",
                    city: 'hello '
                },
                {
                    houseNo: 11,
                    location: "shorakhutee",
                    city: 'ktm '
                },
                {
                    houseNo: 12,
                    location: "newyork",
                    city: 'pokhara '
                },
                {
                    houseNo: 13,
                    location: "denmark",
                    city: ' gorkha'
                }

            ]

        },
        {
            name: 'shyam',
            address: [
                {
                    houseNo: 10,
                    location: "biratnagar",
                    city: 'myworld '
                },
                {
                    houseNo: 11,
                    location: "hetauda",
                    city: 'xyz '
                },
                {
                    houseNo: 12,
                    location: "york",
                    city: 'hello '
                },
                {
                    houseNo: 13,
                    location: "abc",
                    city: 'hello '
                }

            ]

        },

        {
            name: 'lisa',
            address: [
                {
                    houseNo: 10,
                    location: "newyork",
                    city: 'hello '
                },
                {
                    houseNo: 11,
                    location: "newyork",
                    city: 'hello '
                },
                {
                    houseNo: 12,
                    location: "newyork",
                    city: 'hello '
                },
                {
                    houseNo: 13,
                    location: "newyork",
                    city: 'hello '
                }

            ]

        },


    ]

    return (
        <Fragment>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">NAME</th>
                        <th scope="col">ADDRESS</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => {
                        return (
                            

                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>

                                        {item.address.map((itemm, j) => {

                                            return (
                                                <Fragment key={j}>
                                                    {/* <td>{j+1}</td> */}
                                                    <td>{itemm.houseNo}</td>
                                                    <td>{itemm.location}</td>
                                                    <td>{itemm.city}</td>


                                                </Fragment>
                                            )
                                        })}

                                    </td>

                                </tr>


                           


                        )

                    })}


                </tbody>
            </table>


        </Fragment>
    )
}

export default MultipleArrayList












