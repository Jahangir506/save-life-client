import error from '../../assets/images/404.jpg'

const ErrorPage = () => {

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <img src={error} className='w-96' alt="" />
      </div>
    </>
  );
};
export default ErrorPage;
