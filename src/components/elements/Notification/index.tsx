const Notification = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return (
    <div className="flex w-screen h-screen z-50 fixed items-center justify-center top-0">
      <div className="lg:w-1/4 sm:w-1/2 h-auto bg-white rounded">
        <p className="py-2 px-4 text-xl mb-4 bg-yellow-600 text-white rounded-t">
          Pemberitahuan
        </p>
        <div className="flex flex-col gap-4 pb-3 px-4">
          <p className="text-center">Pesan Telah Terkirim, Terima Kasih</p>
          <div className="flex gap-4 justify-end">
            <button
              className="text-white bg-yellow-600 px-4 py-2 rounded"
              onClick={onClick}
            >
              Oke
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
