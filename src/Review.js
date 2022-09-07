import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
	const [index, setIndex] = useState(0);
	const { image, job, name, text } = reviews[index];

	const numberChecker = (number) => {
		if (number < 0) {
			return reviews.length - 1;
		} else if (number > reviews.length - 1) {
			return 0;
		} else {
			return number;
		}
	};

	const handleNext = () => {
		setIndex((prev) => {
			let newNumber = prev + 1;
			return numberChecker(newNumber);
		});
	};

	const handlePrev = () => {
		setIndex((prev) => {
			let newNumber = prev - 1;
			return numberChecker(newNumber);
		});
	};

	const handleSurprise = () => {
		let randomNumber = Math.floor(Math.random() * reviews.length);
		setIndex((prev) => {
			if (randomNumber === prev) {
				randomNumber = prev + 1;
			}
			return numberChecker(randomNumber);
		});
	};
	return (
		<div className="reviews">
			<div className="review__img">
				<div className="image">
					<img src={image} alt={name} />
					<span>
						<FaQuoteRight />
					</span>
				</div>
			</div>
			<div className="review__name">
				<p className="name">{name}</p>
				<p className="job">{job}</p>
			</div>
			<p className="text">{text}</p>
			<div className="review__btn">
				<button onClick={handlePrev}>
					<FaChevronLeft />
				</button>
				<button onClick={handleNext}>
					<FaChevronRight />
				</button>
			</div>
			<button className="surprise__btn" onClick={handleSurprise}>
				Surprise Me
			</button>
		</div>
	);
};

export default Review;
