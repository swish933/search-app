export const pathGet = (arr1, query) => {

    let response = arr1.filter(a => {
      return ( a.user.name.firstName.toLowerCase().includes(query.toLowerCase()) || a.user.name.lastName.toLowerCase().includes(query.toLowerCase()) || a.user.location.city.toLowerCase().includes(query.toLowerCase()) || a.user.location.state.toLowerCase().includes(query.toLowerCase()) || a.user.location.address.toLowerCase().includes(query.toLowerCase()))
    });

    return response;
  }
