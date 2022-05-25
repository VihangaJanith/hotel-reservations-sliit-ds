import axios from "axios";

export const getAllPackages = () => async (dispatch) => {
  dispatch({ type: "GET_PACKAGES_REQUEST" });

  try {
    const response = await axios.get(
      // "http://localhost:5000/api/packages/getallpackages"
      "http://localhost:8290/packages/getpackages"
    );
    console.log(response);
    dispatch({ type: "GET_PACKAGES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PACKAGES_FAILED", payload: error });
  }
};

export const filterPackages = (searchkey, category) => async (dispatch) => {
  var filteredPackages;
  dispatch({ type: "GET_PACKAGES_REQUEST" });

  try {
    const response = await axios.get(
      // "http://localhost:5000/api/packages/getallpackages"
       "http://localhost:8290/packages/getpackages"
    );
    filteredPackages = response.data.filter((packages) =>
    packages.name.toLowerCase().includes(searchkey)
    );

    if (category !== "all") {
      filteredPackages = response.data.filter(
        (packages) => packages.category.toLowerCase() === category
      );
    }

    dispatch({ type: "GET_PACKAGES_SUCCESS", payload: filteredPackages });
  } catch (error) {
    dispatch({ type: "GET_PACKAGES_FAILED", payload: error });
  }
};

export const addPackage = (pack) => async (dispatch) => {
  dispatch({ type: "ADD_PACKAGE_REQUEST" });

  try {
    const response = await axios.post(
      // "http://localhost:5000/api/packages/addpackage",
       "http://localhost:8290/packages/addpackage",
      { pack }
    );
    console.log(response);
    dispatch({ type: "ADD_PACKAGE_SUCCESS" })
    alert("Package added successfully!");
  } catch (error) {
    dispatch({ type: "ADD_PACKAGE_FAILED", payload: error });
  }
};

export const getPackageById = (packageid) => async (dispatch) => {
  dispatch({ type: "GET_PACKAGEBYID_REQUEST" });

  try {
    const response = await axios.post(
      // "http://localhost:5000/api/packages/getpackagebyid",
       "http://localhost:8290/packages/getpackagebyid",
      { packageid }
    );
    console.log(response);
    dispatch({ type: "GET_PACKAGEBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PACKAGEBYID_FAILED", payload: error });
  }
};

export const editPackage = (editedpackage) => async (dispatch) => {
  dispatch({ type: "EDIT_PACKAGE_REQUEST" });

  try {
    const response = await axios.post(
      // "http://localhost:5000/api/packages/editpackage",
     
       "http://localhost:8290/packages/editbyid",
      { editedpackage }
    );
    console.log(response);
    dispatch({ type: "EDIT_PACKAGE_SUCCESS" });
    window.location.href = "/admin/packageslist";
  } catch (error) {
    dispatch({ type: "EDIT_PACKAGE_FAILED", payload: error });
  }
};

export const deletePackage = (packageid) => async (dispatch) => {
  try {
    const response = await axios.post(
      //"http://localhost:5000/api/packages/deletepackage",
       "http://localhost:8290/packages/deletepackage",
      { packageid }
    );
    alert("Package Deleted Successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("Package Deletion Failed");
    console.log(error);
  }
};
