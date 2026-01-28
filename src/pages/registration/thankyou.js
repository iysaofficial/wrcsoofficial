import { useLocation } from "react-router-dom";

const ThankyouPage = () => {
  const { state } = useLocation();
  console.log("Registration Data:", state);

  return (
    <>
      <section className="thankyou">
        <div className="wrapper">
          <h1>Thank You for Registering!</h1>
          <p>
            We appreciate your participation and look forward to your
            involvement.
          </p>

          <table className="thankyou-table">
            <tbody>
              <tr>
                <td>
                  <strong>Team Members</strong>
                </td>
                <td>{state?.namaLengkap}</td>
              </tr>
              <tr>
                <td>
                  <strong>School Name</strong>
                </td>
                <td>{state?.namasekolah}</td>
              </tr>
              <tr>
                <td>
                  <strong>Project Title</strong>
                </td>
                <td>{state?.projectTitle}</td>
              </tr>
              <tr>
                <td>
                  <strong>Competition Category</strong>
                </td>
                <td>{state?.category}</td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>
              *If the data appears, take a screenshot of this page as proof of
              successful registration
            </strong>
          </p>

          <a href="/homeregist" className="btn-regist btn-action">
            Back to Registration Menu
          </a>
        </div>
      </section>
    </>
  );
};

export default ThankyouPage;
