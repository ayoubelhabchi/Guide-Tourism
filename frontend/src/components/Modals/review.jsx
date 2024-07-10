import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { LeaveReview } from "../../features/Slices/reviewSlice";

export default function Review({handleReviewClose}) {
  const dispatch = useDispatch();

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Write a Review</h2>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              {/* <XIcon className="h-5 w-5" /> */}
            </button>
          </div>
          <div className="space-y-4">
            <textarea
              className="w-full border-[1px] border-primary rounded-md p-3 max-h-64 min-h-36 "
              placeholder="Share your thoughts..."
            />
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Rating:</span>
              <div className="flex items-center space-x-1">
                <CiStar className="h-5 w-5 text-primary-500" />
                <CiStar className="h-5 w-5 text-primary-500" />
                <CiStar className="h-5 w-5 text-primary-500" />
                <CiStar className="h-5 w-5 text-gray-300" />
                <CiStar className="h-5 w-5 text-gray-300" />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <button onClick={handleReviewClose} className="px-4 py-2 rounded-md bg-gray/10">Cancel</button>
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-white hover:text-primary border">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
  