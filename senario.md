#나의 캡슐이 처리할 사용자의 말들
# [목적]
# 사용자가 집에서 간편하게 스트레칭 및 홈트레이닝을 할 수 있는 캡슐

# [사용자가 입력할 말들]
# 스쿼트 알려줘
# 하체 운동 알려줘, 추천해줘
# 하체 운동 카운팅 해줘
# 아침에 할 스트레칭 알려줘
# 스쿼트 카운팅해줘

# [발화 함수 : Action]
# TrainingDescription
# TrainingRecommend
# RoutineCounting
# TimeTrainingRecommend
# #{value:HT_Name(required)}


# TrainingDescription
# [발화 변수: Input Concept]
# 운동이름 => trainingName

# [발화 변수: Output Concept]
# Results : name, symptom, cause, part , diet ?


# TrainingRecommend
# [발화 변수: Input Concept]
# 루틴이름 => RoutineName

# [발화 변수: Output Concept]
# RoutineResults : 


# RoutineCounting
# [발화 변수: Input Concept]
# 루틴이름 => RoutineName
# 카운팅 => Count

# [발화 변수: Output Concept]
# Results : 


# TimeTrainingRecommend
# [발화 변수: Input Concept]
# 시간 => Time

# [발화 변수: Output Concept]
# TimeTrainingResults :


# #{value:HT_Name(required)}
# [발화 변수: Input Concept]
# 운동 => Training
# 세트 => Set

# [발화 변수: Output Concept]
# TrainingCountResults : 