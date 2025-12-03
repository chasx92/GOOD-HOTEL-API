import { useState, useRef } from 'react';
import { Building2, Mail, Phone, MapPin, ChevronDown, Check, AlertCircle, Send, Briefcase, MessageSquare, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface FormData {
  hotelName: string;
  city: string;
  country: string;
  roomCount: string;
  lockProvider: string;
  lockProviderOther: string;
  pms: string[];
  name: string;
  role: string;
  email: string;
  phone: string;
  comment: string;
  timeline: string;
  consent: boolean;
}

export function LeadForm() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState<'idle' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState<FormData>({
    hotelName: '',
    city: '',
    country: '',
    roomCount: '',
    lockProvider: '',
    lockProviderOther: '',
    pms: [],
    name: '',
    role: '',
    email: '',
    phone: '',
    comment: '',
    timeline: '',
    consent: false,
  });

  const roomOptions = t.form.roomOptions;
  const lockProviders = t.form.lockProviders;
  const pmsOptions = t.form.pmsOptions;
  const timelineOptions = t.form.timelineOptions;

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateField = (name: string, value: any) => {
    switch (name) {
      case 'hotelName':
        return value.trim() === '' ? t.form.errors.hotelNameRequired : '';
      case 'roomCount':
        return value === '' ? t.form.errors.roomCountRequired : '';
      case 'email':
        if (value.trim() === '') return t.form.errors.emailRequired;
        if (!validateEmail(value)) return t.form.errors.emailInvalid;
        return '';
      case 'consent':
        return !value ? t.form.errors.consentRequired : '';
      default:
        return '';
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name as keyof FormData]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({ ...prev, [name]: newValue }));

    if (touched[name]) {
      const error = validateField(name, newValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const togglePMS = (value: string) => {
    setFormData((prev) => {
      const newPMS = prev.pms.includes(value)
        ? prev.pms.filter(p => p !== value)
        : [...prev.pms, value];
      return { ...prev, pms: newPMS };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const requiredFields = ['hotelName', 'roomCount', 'email', 'consent'];
    const newErrors: Record<string, string> = {};
    
    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        hotelName: true,
        roomCount: true,
        email: true,
        consent: true,
      });
      return;
    }

    setFormState('success');
    
    setTimeout(() => {
      setFormState('idle');
      setFormData({
        hotelName: '',
        city: '',
        country: '',
        roomCount: '',
        lockProvider: '',
        lockProviderOther: '',
        pms: [],
        name: '',
        role: '',
        email: '',
        phone: '',
        comment: '',
        timeline: '',
        consent: false,
      });
      setErrors({});
      setTouched({});
    }, 5000);
  };

  if (formState === 'success') {
    return (
      <section 
        id="form" 
        className="scroll-mt-16"
        style={{ 
          background: '#F2F2F7',
          paddingTop: 'calc(var(--spacing) * 20)',
          paddingBottom: 'calc(var(--spacing) * 20)',
        }}
      >
        <div className="max-w-[700px] mx-auto px-5 md:px-6">
          <motion.div
            className="rounded-[20px] md:rounded-[24px] text-center relative overflow-hidden"
            style={{
              background: '#FFFFFF',
              border: '2px solid #34C759',
              boxShadow: '0 8px 32px rgba(52, 199, 89, 0.15)',
              padding: 'calc(var(--spacing) * 12)',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto flex items-center justify-center"
              style={{ 
                background: 'rgba(52, 199, 89, 0.1)',
                marginBottom: 'calc(var(--spacing) * 6)',
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 25 }}
            >
              <Check className="w-8 h-8 md:w-10 md:h-10" style={{ color: '#34C759' }} />
            </motion.div>
            
            <motion.h3
              className="text-2xl md:text-3xl text-balance"
              style={{
                color: '#1C1C1E',
                fontFamily: '-apple-system, SF Pro Display, sans-serif',
                fontWeight: 700,
                marginBottom: 'calc(var(--spacing) * 4)',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
            >
              {t.form.success.title}
            </motion.h3>
            
            <motion.p
              className="max-w-md mx-auto text-pretty"
              style={{
                color: '#3C3C43',
                fontFamily: '-apple-system, SF Pro Display, sans-serif',
                fontSize: '16px',
                lineHeight: 1.6,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            >
              {t.form.success.message}
            </motion.p>
          </motion.div>
        </div>
      </section>
    );
  }

  const showLockProviderOther = formData.lockProvider === 'other';
  const showTimeline = formData.roomCount !== '';

  return (
    <section 
      id="form"
      aria-labelledby="form-heading"
      ref={sectionRef}
      className="scroll-mt-16"
      style={{ 
        background: '#F2F2F7',
        paddingTop: 'calc(var(--spacing) * 12)', // Réduit de 80px à 48px
        paddingBottom: 'calc(var(--spacing) * 16)', // Réduit de 80px à 64px pour le footer
      }}
    >
      <div className="max-w-[700px] mx-auto px-5 md:px-6">
        <motion.div
          className="text-center"
          style={{ marginBottom: 'calc(var(--spacing) * 10)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 
            className="text-[28px] md:text-3xl lg:text-4xl text-balance"
            style={{
              color: '#1C1C1E',
              fontFamily: '-apple-system, SF Pro Display, sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'calc(var(--spacing) * 4)',
            }}
          >
            {t.form.title}
          </h2>
          <p 
            className="text-[15px] md:text-[16px] max-w-md mx-auto text-pretty"
            style={{
              color: '#3C3C43',
              fontFamily: '-apple-system, SF Pro Display, sans-serif',
              lineHeight: 1.6,
            }}
          >
            {t.form.subtitle}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5 md:space-y-6 rounded-[20px] md:rounded-[24px] p-6 md:p-8"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Hotel Name */}
          <div>
            <label 
              htmlFor="hotelName" 
              className="block mb-2 text-[14px] md:text-[15px]"
              style={{
                color: '#1C1C1E',
                fontFamily: '-apple-system, SF Pro Display, sans-serif',
                fontWeight: 600,
              }}
            >
              {t.form.fields.hotelName.label} <span style={{ color: '#FF3B30' }}>*</span>
            </label>
            <div className="relative">
              <Building2 
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10" 
                style={{ color: '#8E8E93' }}
              />
              <input
                type="text"
                id="hotelName"
                name="hotelName"
                required
                value={formData.hotelName}
                onChange={handleChange}
                onBlur={() => handleBlur('hotelName')}
                className="w-full pl-11 pr-4 py-3.5 rounded-[12px] transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] text-[16px]"
                style={{
                  background: '#F2F2F7',
                  border: touched.hotelName && errors.hotelName ? '2px solid #FF3B30' : '2px solid transparent',
                  color: '#1C1C1E',
                  fontFamily: '-apple-system, SF Pro Display, sans-serif',
                }}
                placeholder={t.form.fields.hotelName.placeholder}
              />
            </div>
            <AnimatePresence>
              {touched.hotelName && errors.hotelName && (
                <motion.div
                  className="flex items-center gap-1.5 mt-2"
                  style={{ color: '#FF3B30', fontSize: '13px' }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.hotelName}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* City & Country */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label 
                htmlFor="city" 
                className="block mb-2 text-[14px] md:text-[15px]"
                style={{
                  color: '#1C1C1E',
                  fontFamily: '-apple-system, SF Pro Display, sans-serif',
                  fontWeight: 600,
                }}
              >
                {t.form.fields.city.label}
              </label>
              <div className="relative">
                <MapPin 
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10" 
                  style={{ color: '#8E8E93' }}
                />
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 rounded-[12px] transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] text-[16px]"
                  style={{
                    background: '#F2F2F7',
                    border: '2px solid transparent',
                    color: '#1C1C1E',
                    fontFamily: '-apple-system, SF Pro Display, sans-serif',
                  }}
                  placeholder={t.form.fields.city.placeholder}
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="country" 
                className="block mb-2 text-[14px] md:text-[15px]"
                style={{
                  color: '#1C1C1E',
                  fontFamily: '-apple-system, SF Pro Display, sans-serif',
                  fontWeight: 600,
                }}
              >
                {t.form.fields.country.label}
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-[12px] transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] text-[16px]"
                style={{
                  background: '#F2F2F7',
                  border: '2px solid transparent',
                  color: '#1C1C1E',
                  fontFamily: '-apple-system, SF Pro Display, sans-serif',
                }}
                placeholder={t.form.fields.country.placeholder}
              />
            </div>
          </div>

          {/* Room Count */}
          <div>
            <label 
              htmlFor="roomCount" 
              className="block mb-2 text-[14px] md:text-[15px]"
              style={{
                color: '#1C1C1E',
                fontFamily: '-apple-system, SF Pro Display, sans-serif',
                fontWeight: 600,
              }}
            >
              {t.form.fields.roomCount.label} <span style={{ color: '#FF3B30' }}>*</span>
            </label>
            <div className="relative">
              <ChevronDown 
                className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10" 
                style={{ color: '#8E8E93' }}
              />
              <select
                id="roomCount"
                name="roomCount"
                required
                value={formData.roomCount}
                onChange={handleChange}
                onBlur={() => handleBlur('roomCount')}
                className="w-full px-4 py-3.5 rounded-[12px] transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] text-[16px] appearance-none cursor-pointer"
                style={{
                  background: '#F2F2F7',
                  border: touched.roomCount && errors.roomCount ? '2px solid #FF3B30' : '2px solid transparent',
                  color: formData.roomCount ? '#1C1C1E' : '#8E8E93',
                  fontFamily: '-apple-system, SF Pro Display, sans-serif',
                }}
              >
                <option value="">{t.form.fields.roomCount.placeholder}</option>
                {roomOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <AnimatePresence>
              {touched.roomCount && errors.roomCount && (
                <motion.div
                  className="flex items-center gap-1.5 mt-2"
                  style={{ color: '#FF3B30', fontSize: '13px' }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.roomCount}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Lock Provider */}
          <div>
            <label 
              htmlFor="lockProvider" 
              className="block mb-2 text-[14px] md:text-[15px]"
              style={{
                color: '#1C1C1E',
                fontFamily: '-apple-system, SF Pro Display, sans-serif',
                fontWeight: 600,
              }}
            >
              {t.form.fields.lockProvider.label}
            </label>
            <div className="relative">
              <ChevronDown 
                className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10" 
                style={{ color: '#8E8E93' }}
              />
              <select
                id="lockProvider"
                name="lockProvider"
                value={formData.lockProvider}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-[12px] transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] text-[16px] appearance-none cursor-pointer"
                style={{
                  background: '#F2F2F7',
                  border: '2px solid transparent',
                  color: formData.lockProvider ? '#1C1C1E' : '#8E8E93',
                  fontFamily: '-apple-system, SF Pro Display, sans-serif',
                }}
              >
                <option value="">{t.form.fields.lockProvider.placeholder}</option>
                {lockProviders.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Lock Provider Other */}
          <AnimatePresence>
            {showLockProviderOther && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label 
                  htmlFor="lockProviderOther" 
                  className="block mb-2 text-[14px] md:text-[15px]"
                  style={{
                    color: '#1C1C1E',
                    fontFamily: '-apple-system, SF Pro Display, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {t.form.fields.lockProviderOther.label}
                </label>
                <input
                  type="text"
                  id="lockProviderOther"
                  name="lockProviderOther"
                  value={formData.lockProviderOther}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-[12px] transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] text-[16px]"
                  style={{
                    background: '#F2F2F7',
                    border: '2px solid transparent',
                    color: '#1C1C1E',
                    fontFamily: '-apple-system, SF Pro Display, sans-serif',
                  }}
                  placeholder={t.form.fields.lockProviderOther.placeholder}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* PMS */}
          <div>
            <label 
              className="block mb-3 text-[14px] md:text-[15px]"
              style={{
                color: '#1C1C1E',
                fontFamily: '-apple-system, SF Pro Display, sans-serif',
                fontWeight: 600,
              }}
            >
              {t.form.fields.pms.label}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {pmsOptions.map((pms) => (
                <motion.button
                  key={pms.value}
                  type="button"
                  onClick={() => togglePMS(pms.value)}
                  className="px-3 py-2.5 rounded-[10px] text-[14px] transition-all relative overflow-hidden"
                  style={{
                    background: formData.pms.includes(pms.value) ? 'rgba(0, 122, 255, 0.1)' : '#F2F2F7',
                    border: formData.pms.includes(pms.value) ? '2px solid #007AFF' : '2px solid transparent',
                    color: formData.pms.includes(pms.value) ? '#007AFF' : '#1C1C1E',
                    fontFamily: '-apple-system, SF Pro Display, sans-serif',
                    fontWeight: formData.pms.includes(pms.value) ? 600 : 500,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-1.5">
                    {formData.pms.includes(pms.value) && (
                      <Check className="w-3.5 h-3.5" />
                    )}
                    {pms.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact Info Header */}
          <div className="pt-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
            <h3 
              className="text-[16px] mb-4"
              style={{
                color: '#1C1C1E',
                fontFamily: '-apple-system, SF Pro Display, sans-serif',
                fontWeight: 600,
              }}
            >
              Contact Information
            </h3>
          </div>

          {/* Name & Role */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label 
                htmlFor="name" 
                className="block mb-2 text-[14px] md:text-[15px]"
                style={{
                  color: '#1C1C1E',
                  fontFamily: '-apple-system, SF Pro Display, sans-serif',
                  fontWeight: 600,
                }}
              >
                {t.form.fields.name.label}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-[12px] transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] text-[16px]"
                style={{
                  background: '#F2F2F7',
                  border: '2px solid transparent',
                  color: '#1C1C1E',
                  fontFamily: '-apple-system, SF Pro Display, sans-serif',
                }}
                placeholder={t.form.fields.name.placeholder}
              />
            </div>

            <div>
              <label 
                htmlFor="role" 
                className="block mb-2 text-[14px] md:text-[15px]"
                style={{
                  color: '#1C1C1E',
                  fontFamily: '-apple-system, SF Pro Display, sans-serif',
                  fontWeight: 600,
                }}
              >
                {t.form.fields.role.label}
              </label>
              <div className="relative">
                <Briefcase 
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10" 
                  style={{ color: '#8E8E93' }}
                />
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 rounded-[12px] transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] text-[16px]"
                  style={{
                    background: '#F2F2F7',
                    border: '2px solid transparent',
                    color: '#1C1C1E',
                    fontFamily: '-apple-system, SF Pro Display, sans-serif',
                  }}
                  placeholder={t.form.fields.role.placeholder}
                />
              </div>
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label 
                htmlFor="email" 
                className="block mb-2 text-[14px] md:text-[15px]"
                style={{
                  color: '#1C1C1E',
                  fontFamily: '-apple-system, SF Pro Display, sans-serif',
                  fontWeight: 600,
                }}
              >
                {t.form.fields.email.label} <span style={{ color: '#FF3B30' }}>*</span>
              </label>
              <div className="relative">
                <Mail 
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10" 
                  style={{ color: '#8E8E93' }}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  className="w-full pl-11 pr-4 py-3.5 rounded-[12px] transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] text-[16px]"
                  style={{
                    background: '#F2F2F7',
                    border: touched.email && errors.email ? '2px solid #FF3B30' : '2px solid transparent',
                    color: '#1C1C1E',
                    fontFamily: '-apple-system, SF Pro Display, sans-serif',
                  }}
                  placeholder={t.form.fields.email.placeholder}
                />
              </div>
              <AnimatePresence>
                {touched.email && errors.email && (
                  <motion.div
                    className="flex items-center gap-1.5 mt-2"
                    style={{ color: '#FF3B30', fontSize: '13px' }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.email}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label 
                htmlFor="phone" 
                className="block mb-2 text-[14px] md:text-[15px]"
                style={{
                  color: '#1C1C1E',
                  fontFamily: '-apple-system, SF Pro Display, sans-serif',
                  fontWeight: 600,
                }}
              >
                {t.form.fields.phone.label}
              </label>
              <div className="relative">
                <Phone 
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10" 
                  style={{ color: '#8E8E93' }}
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 rounded-[12px] transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] text-[16px]"
                  style={{
                    background: '#F2F2F7',
                    border: '2px solid transparent',
                    color: '#1C1C1E',
                    fontFamily: '-apple-system, SF Pro Display, sans-serif',
                  }}
                  placeholder={t.form.fields.phone.placeholder}
                />
              </div>
            </div>
          </div>

          {/* Timeline */}
          <AnimatePresence>
            {showTimeline && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label 
                  htmlFor="timeline" 
                  className="block mb-2 text-[14px] md:text-[15px]"
                  style={{
                    color: '#1C1C1E',
                    fontFamily: '-apple-system, SF Pro Display, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {t.form.fields.timeline.label}
                </label>
                <div className="relative">
                  <ChevronDown 
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10" 
                    style={{ color: '#8E8E93' }}
                  />
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-[12px] transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] text-[16px] appearance-none cursor-pointer"
                    style={{
                      background: '#F2F2F7',
                      border: '2px solid transparent',
                      color: formData.timeline ? '#1C1C1E' : '#8E8E93',
                      fontFamily: '-apple-system, SF Pro Display, sans-serif',
                    }}
                  >
                    <option value="">{t.form.fields.timeline.placeholder}</option>
                    {timelineOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Comment */}
          <div>
            <label 
              htmlFor="comment" 
              className="block mb-2 text-[14px] md:text-[15px]"
              style={{
                color: '#1C1C1E',
                fontFamily: '-apple-system, SF Pro Display, sans-serif',
                fontWeight: 600,
              }}
            >
              {t.form.fields.comment.label}
            </label>
            <div className="relative">
              <MessageSquare 
                className="absolute left-3.5 top-4 w-5 h-5 pointer-events-none z-10" 
                style={{ color: '#8E8E93' }}
              />
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                rows={4}
                className="w-full pl-11 pr-4 py-3.5 rounded-[12px] transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] text-[16px] resize-none"
                style={{
                  background: '#F2F2F7',
                  border: '2px solid transparent',
                  color: '#1C1C1E',
                  fontFamily: '-apple-system, SF Pro Display, sans-serif',
                }}
                placeholder={t.form.fields.comment.placeholder}
              />
            </div>
          </div>

          {/* Consent */}
          <div>
            <label 
              className="flex items-start gap-3 cursor-pointer group"
              htmlFor="consent"
            >
              <div className="relative flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  onBlur={() => handleBlur('consent')}
                  className="w-5 h-5 rounded-md cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#007AFF] focus-visible:ring-offset-2"
                  style={{
                    accentColor: '#007AFF',
                  }}
                />
              </div>
              <span 
                className="text-[13px] md:text-[14px] flex-1"
                style={{
                  color: '#3C3C43',
                  fontFamily: '-apple-system, SF Pro Display, sans-serif',
                  lineHeight: '1.5',
                }}
              >
                {t.form.fields.consent}
              </span>
            </label>
            <AnimatePresence>
              {touched.consent && errors.consent && (
                <motion.div
                  className="flex items-center gap-1.5 mt-2 ml-8"
                  style={{ color: '#FF3B30', fontSize: '13px' }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.consent}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full group relative overflow-hidden rounded-[14px] py-4 mt-2 btn-gradient"
            whileHover={{
              scale: 1.01,
              boxShadow: '0 8px 24px rgba(0, 122, 255, 0.25)',
            }}
            whileTap={{ scale: 0.99 }}
          >
            <span 
              className="relative z-10 flex items-center justify-center gap-2.5 text-white"
              style={{ 
                fontSize: '17px',
                fontWeight: 600,
                fontFamily: '-apple-system, SF Pro Display, sans-serif'
              }}
            >
              {t.form.submit}
              <Send className="w-5 h-5" />
            </span>
          </motion.button>

          {/* Privacy Note */}
          <div 
            className="flex items-start gap-2 pt-4 text-[12px] md:text-[13px]"
            style={{
              color: '#8E8E93',
              fontFamily: '-apple-system, SF Pro Display, sans-serif',
            }}
          >
            <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>
              {t.form.securityNote}
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}