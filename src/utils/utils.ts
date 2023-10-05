export const formatNumber = (_number: number) => {
  return _number < 10 ? '0' + _number : _number;
};

export const formtDate = (_date: string, _delimiter: string = '.') => {
  const _newDate = new Date(_date);
  const _min = formatNumber(_newDate.getMinutes());
  const _hour = _newDate.getHours();
  const _day = formatNumber(_newDate.getDay() + 1);
  const _month = formatNumber(_newDate.getMonth() + 1);
  const _year = _newDate.getFullYear();
  const _dateFormat = `${_day}${_delimiter}${_month}${_delimiter}${_year}`;
  const _timeFormat = `${_hour}:${_min}`;
  return _dateFormat + ' ' + _timeFormat;
};

export const sortDataByField = (_data: [], _fieldName: string) => {
  return _data.sort((a, b) => b - a);
};
