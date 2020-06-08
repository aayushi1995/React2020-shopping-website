import React from 'react';

import SHOP_DATA from './shop.data.js';

import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';

export class ShopPage extends React.Component{

    constructor(props) {

        super(props);

        this.state = {
            collection : SHOP_DATA
        }
    }

    render() {
        const {collection} = this.state;
        return (
            <div >
                <div> Collection </div>
                <div className="">
                    {
                        collection.map( ({id, ...otherCollectionParams}) => {
                            return <CollectionPreview key={id} {...otherCollectionParams}/>
                        } )
                    }
                </div>
            </div>
            
           
        )
    }
}