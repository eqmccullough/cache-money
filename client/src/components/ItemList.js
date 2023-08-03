import React from 'react';

const ItemList = ( categoryItems ) => {
  if (!categoryItems.length) {
    return <h3>No Items Found</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Items
      </h3>
      <div className="flex-row my-4">
        {categoryItems &&
          categoryItems.map((item) => (
            <div key={item._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {item.name}
                  <span style={{ fontSize: '0.825rem' }}>
                  {item.amount}
                  </span>
                </h5>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ItemList;