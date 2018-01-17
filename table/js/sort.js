'use strict';

function handleTableClick(event) {

  if (event.target.tagName === 'TH') {
    console.log('');
    if (event.target.dataset.dir === undefined || event.target.dataset.dir === '-1') {
      event.target.dataset.dir = 1;
    } else {
      event.target.dataset.dir = -1;
    }

    event.currentTarget.dataset.sortBy = event.target.dataset.propName;
    sortTable(event.target.dataset.propName, Number(event.target.dataset.dir));
  }

}
