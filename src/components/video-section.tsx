export default function VideoSection() {
    return (
      <div className="space-y-8">
        <div className="aspect-video overflow-hidden rounded-lg shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/6Wy9aixTwjU?si=X8VWmRy2gw3BeleW"
            title="SIRT Bhopal Campus Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
  
        <div className="mt-8">
          <h3 className="text-xl font-bold text-navy-blue mb-4">Campus Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-md">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/P-UeFBtxp8Y?si=WwlnJoy4MWL6cEWh`}
                  title={`SIRT Bhopal Campus Highlight ${index}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  