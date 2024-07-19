import React, { useState, useRef, useEffect } from 'react';
import {
  DropUpContainer,
  DropUpButton,
  ArrowIcon,
  OptionList,
  OptionItem,
  Checkbox,
  Label,
  StyledInput,
  SelectedOptionsContainer,
  SelectedOption,
} from './styles';
import dropupImg from '/src/assets/dropUp.png';
import dropdownImg from '/src/assets/dropDown.png';

type Props = {
  onChange: (selectedOptions: string[]) => void;
};

const DropUp = ({ onChange }: Props) => {
  const options = ['메타버스', '핀테크', 'NFT', '트래블테크', '헬스케어'];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dropUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropUpRef.current && !dropUpRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropUp = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (option: string) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
    onChange(updatedOptions);
  };

  return (
    <DropUpContainer ref={dropUpRef}>
      {selectedOptions.length > 0 ? (
        <SelectedOptionsContainer onClick={toggleDropUp}>
          {selectedOptions.map((option) => (
            <SelectedOption key={option}>{option}</SelectedOption>
          ))}
        </SelectedOptionsContainer>
      ) : (
        <StyledInput value="" placeholder="선택해주세요" readOnly onClick={toggleDropUp} />
      )}
      <DropUpButton onClick={toggleDropUp}>
        <ArrowIcon src={isOpen ? dropupImg : dropdownImg} alt="arrow" />
      </DropUpButton>
      {isOpen && (
        <OptionList>
          {options.map((option) => (
            <OptionItem key={option}>
              <Checkbox
                type="checkbox"
                id={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <Label htmlFor={option}>{option}</Label>
            </OptionItem>
          ))}
        </OptionList>
      )}
    </DropUpContainer>
  );
};

export default DropUp;
