import React, { useState } from "react";

type FormProps = {
	label: string;
	error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Form = React.forwardRef<HTMLInputElement, FormProps>(
	({ type = "text", name, label, error, className, ...props }, ref) => {
		const [touched, setTouched] = useState(false);

		return (
			<div className={`flex flex-col gap-1 ${className}`}>
				{label && (
					<label htmlFor={name} className='text-sm font-medium text-gray-700'>
						{label}
					</label>
				)}

				<input
					ref={ref}
					type={type}
					name={name}
					{...props}
					onBlur={() => setTouched(true)}
					className={`px-3 py-2 rounded-md border
            ${
							error && touched
								? "border-red-500 focus:ring-red-500"
								: "border-gray-300 focus:ring-blue-500"
						}
            focus:outline-none focus:ring-2`}
				/>

				{/* ✅ Error shows only after user interaction */}
				{error && touched && (
					<span className='text-xs text-red-500'>{error}</span>
				)}
			</div>
		);
	},
);

export default Form;
