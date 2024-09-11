export default function ResultsPage({ results }: any) {
  return (
    <div>
      <div className="my-2 text-lg font-bold">
        Cho thuê phòng trọ, cho thuê nhà trọ, tìm phòng trọ
      </div>
      <div className="mb-8">Cho thuê phòng trọ số 1 Việt Nam</div>
      {results.length ? (
        <div className="container mx-auto pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item: any) => (
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://static123.com/phongtro123/uploads/images/thumbs/450x300/fit/2020/08/03/z2007085821510-1c5f88e7607b8437fadb01dc77adf5ab_1596463424.jpg"
                  alt="Room Image"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.content}</p>
                  <div className="flex justify-between">
                    <div className="text-sm font-medium text-gray-900">
                      {item.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      Diện tích: {item.area} m2
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-20 font-bold">
          Cannot find any room match condition
        </div>
      )}
    </div>
  );
}
