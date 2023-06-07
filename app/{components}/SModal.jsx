export default function(props){
	return <div className={props.show ? "modal fade show" : "modal fade"} role="dialog">
		<div className={`modal-dialog ${props.size === "md" ? "" : "modal-" + (props.size || "lg")} ${props.docPreview ? "mw-100 px-5 pb-5 h-100" : ""}`} role="document">
			<div className={`modal-content ${props.docPreview ? "h-100" : ""}`}>
				{(props.title || props.closeable) && <div className="modal-header">
					<h5 className="modal-title">{props.title}</h5>
					{props.closeable && <button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>}
				</div>}
				<div className="modal-body">
					{props.children}
				</div>
				{props.buttons && <div className="modal-footer">
					{props.buttons}
				</div>}
			</div>
		</div>
	</div>
};
