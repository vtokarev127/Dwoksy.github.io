var Person = React.createClass({
	render: function() {
		return (
			<tr className="row">
				<td className="cell"> {this.props.cathedra} </td>
				<td className="cell"> {this.props.name} </td>
				<td className="cell"> {this.props.surname} </td>
				<td className="cell"> {this.props.phoneNumber} </td>
				<td className="cell"> {this.props.adress} </td>
				<td className="cell"> {this.props.family} </td>
				<td className="cell"> {this.props.father} </td>
				<td className="cell"> {this.props.mother} </td>
				<td className="cell"> {this.props.admission} </td>
				<td className="cell"> {this.props.course} </td>
				<td className="cell"> {this.props.curator} </td>
			</tr>
		);
	}	
});

var TableHead = React.createClass({
	render: function() {
		return (
			<thead>
				<tr className="row">
					<td className="cell">Кафедра</td>
					<td className="cell">Имя</td>
					<td className="cell">Фамилия</td>
					<td className="cell">Номер телефона</td>
					<td className="cell">Адрес</td>
					<td className="cell">Семейное положение</td>
					<td className="cell">Отец</td>
					<td className="cell">Мать</td>
					<td className="cell">Год поступления</td>
					<td className="cell">Курс</td>
					<td className="cell">Куратор</td>
				</tr>
			</thead>
		);
	}
});

var TableDb = React.createClass({

	getInitialState: function() {
		return {
			displayedPerson: STUDENT
		};
	},

	handleSearch: function(event) {
		var searchQuery = event.target.value.toLowerCase();
		var displayedPerson = STUDENT.filter(function(el) {
			var searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});

		this.setState({
			displayedPerson: displayedPerson
		});
	},

	changeCurator: function(event) {
		var optionValue = event.target.value;
		var displayedPerson = STUDENT.filter(function(el) {
			var searchValue = el.curator;
			return searchValue.indexOf(optionValue) !== -1;
		});

		this.setState({
			displayedPerson: displayedPerson
		});
	},

	change: function(event) {
		var optionValue = event.target.value;
		var displayedPerson = STUDENT.filter(function(el) {
			var searchValue = el.cathedra;
			return searchValue.indexOf(optionValue) !== -1;
		});

		this.setState({
			displayedPerson: displayedPerson
		});
	},

	render: function() {
		return (
			<div className="container">
				<div className="filter">
					<input placeholder="Введите имя" className="search-field" type="text" onChange={this.handleSearch} />
					<select onChange={this.changeCurator}>
						<option value="Завьялова">Завьялова</option>
						<option value="Другая">Другая</option>
					</select>
					<select onChange={this.change}>
						<option value="экономики, бизнеса и информационных систем">экономики, бизнеса и информационных систем</option>
						<option value="Другая">Другая</option>
					</select>
				</div>
				<table>
					<TableHead />
					{
						this.state.displayedPerson.map(function(el) {
							return <Person
											key={el.id}
											cathedra={el.cathedra}
											name={el.name}
											surname={el.surname}
											phoneNumber={el.phoneNumber}
											adress={el.adress}
											family={el.family}
											father={el.father}
											mother={el.mother}
											admission={el.admission}
											course={el.course}
											curator={el.curator}
										/>;
						})
					}				
				</table>
			</div>
		);
	}
});

ReactDOM.render(
	<TableDb />,
	document.getElementById('content')
)